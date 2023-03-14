import os

path = '/InAreas'
for filename in os.listdir(path):
    if filename.startswith('oldprefix'):
        os.rename(os.path.join(path, filename), os.path.join(path, 'newprefix' + filename[len('oldprefix'):]))

