import torch
from torchvision import transforms
from PIL import Image


img = Image.open("duyuan.jpg").convert("RGB")

# trans = transforms.Compose(
#     [
#         transforms.Resize(size=400),
#         transforms.CenterCrop(size=(536, 400))
#     ]
# )

ow, oh = img.size

if oh > 536 * (ow / 400) :
    size = 400 
else :
    size = ow * 536 / oh 


trans = transforms.Compose(
    [
        transforms.Resize(size=size),
        transforms.CenterCrop(size=(536, 400))
    ]
)

new_img = trans(img)

new_img.save("duyuan2.jpg")





