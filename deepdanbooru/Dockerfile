FROM python:3.6
RUN apt-get update
COPY src/requirements.txt .
RUN pip install -r requirements.txt
COPY src/ .
RUN wget https://github.com/KichangKim/DeepDanbooru/releases/download/v4-20200814-sgd-e30/deepdanbooru-v4-20200814-sgd-e30.zip -O model.zip && unzip model.zip -d model && rm model.zip
CMD [ "python", "./app.py" ]