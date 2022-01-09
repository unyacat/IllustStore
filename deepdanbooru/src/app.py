import os
import time
import shutil
import deepdanbooru

from PIL import Image

from misc.image import rotate_exif
from misc.gets import get_new_media, get_image
from misc.posts import post_image_labels

import gc


BASE_ADDRESS = "http://" + os.getenv("BASE_ADDRESS", 'localhost:4000')
MEDIA_ADDRESS = BASE_ADDRESS + '/media/thumb_'
LABEL_ADDRESS = BASE_ADDRESS + '/labels'
FETCH_INTERVAL = int(os.getenv("FETCH_INTERVAL", '5'))

project_path = "model"
model_path = None
tags_path = None
threshold = 0.5
allow_gpu = False
compile_model = False
allow_folder = False
folder_filters = '*.[Pp][Nn][Gg],*.[Jj][Pp][Gg],*.[Jj][Pp][Ee][Gg],*.[Gg][Ii][Ff]'
verbose = False


if __name__ == "__main__":
    time.sleep(FETCH_INTERVAL)

    while True:
        new_media_list = get_new_media(LABEL_ADDRESS + '/getBatch')
        if new_media_list:
            for media in new_media_list:
                prediction = []
                image_path = '/media/' + media['id']
                print(image_path, flush=True)
                try:
                    tags = deepdanbooru.commands.evaluate(target_paths=[image_path], project_path=project_path, model_path=model_path, tags_path=tags_path, threshold=threshold, allow_gpu=allow_gpu, compile_model=compile_model, allow_folder=allow_folder, folder_filters=folder_filters, verbose=verbose)
                    prediction = [tag[0] for tag in tags]
                    print(prediction, flush=True)
                except Exception as e:
                    print(e, flush=True)

                post_image_labels(LABEL_ADDRESS + '/labelAuto', media['id'], prediction)


        time.sleep(FETCH_INTERVAL)
