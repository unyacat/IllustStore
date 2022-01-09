# IllustStore

IllustStore is a self-hosted illustration gallery. [gregordr/ImageStore](https://github.com/gregordr/ImageStore) modified for illustration.

## Features:
- Clean and intuitive UI for desktop and mobile browsers
- Automatic thumbnail creation for faster loading times
- Fast uploads for both photos and videos
- Albums to sort your photos
- Easily searchable labels
- Automatic image-tagging
- Face recognition
- AI based search
- Modular architecture for easy expanding

[Online demo(ImageStore)](https://gregordr.github.io/ImageStore/)

This should give you a feeling of how everything works with images of cats. The demo is not very up to date or fast, but you can use it to see if you like the UI in general.

To upload your own images and use all features, you will need to self-host.

![preview](https://imgur.com/0yZQ7c7.jpg)

## Installation instructions:

### Docker prebuilt images

Requirements:

 - Docker
 - Docker-compose
 - For more advanced features: x86_64 CPU (also known as x64, x86_64, AMD64 and Intel 64)

Download the docker-compose.yml: ```wget https://raw.githubusercontent.com/unyacat/IllustStore/main/docker-compose.yml```.

Run ```docker-compose up```. If you want any optional modules, use ```--profile module``` to add them. Check below for a list of modules and explanations! 

Example: ```docker-compose --profile search --profile face --profile import up```.

Go to http://localhost:3000. You can edit the used port in the dockerfile.

You can update to the newest version with ```docker-compose pull```. Again, use ```--profile module``` if you also want to update a module. 

Last, if you want to run the dev-branch, do ```TAG=:test docker-compose up```.

### Docker build images yourself

Requirements:
 - Docker
 - Docker-compose
 - For automatic labeling: x86_64 CPU (also known as x64, x86_64, AMD64 and Intel 64)

If you want to build yourself, then clone this repo and run ```docker-compose -f docker-compose-build.yml up```. Again, you can use ```--profile``` to add features.


~~## Contributing:

~~Feel free to open an issue if you want to see any new features.

~~If you would like to implement a feature, please create a PR to the ```test``` branch.


## LICENSE
* [gregordr/ImageStore](https://github.com/gregordr/ImageStore) by gregordr (Apache 2.0 [license](https://www.apache.org/licenses/LICENSE-2.0))  
Change the target from photos to illustrations.
* [KichangKim/DeepDanbooru](https://github.com/KichangKim/DeepDanbooru) by KichangKim (MIT [license](https://opensource.org/licenses/mit-license.php))
