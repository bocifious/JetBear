import os, sys
import pygame
from pygame.locals import *

if not pygame.font: print('Warning, fonts disabled')
if not pygame.mixer: print('Warning, sound disabled')

def game_intro():
    
    intro = True

    while intro:
        for event in pygame.event.get():
            print(event)
            if event.type == pygame.QUIT:
                pygame.quit()
                quit()
        
        gameDisplay.fill(white)
        largeText = pygame.font.Font('Times New Roman', 115)
        TextSurf, TextRect = text_objects("Jet Bear", largeText)
        TextRect.center = ((display+width/2), (display_height/2))
        gameDisplay.blit(TextSurf, TextRect)
        pygame.display.update()
        clock.tick(15)

def load_image(name, colorkey=None):
    fullname = os.path.join('data', name)
    try:
        image = pygame.image.load(fullname)
    except pygame.error as message:
        print('Cannot load image:', name)
        raise SystemExit(message)
    image = image.convert()
    if colorkey is not None:
        if colorkey is -1:
            colorkey = image.get_at((0, 0))
        image.set_colorkey(colorkey, RLEACCEL)
    return image, image.get_rect()

pygame.init()
clock = pygame.time.Clock()
screen = pygame.display.set_mode((930, 360))

bg = pygame.image.load(os.path.join("images", "background.png"))

pygame.mouse.set_visible(0)

ship = pygame.image.load(os.path.join("images", "icon2.png"))
ship_top = screen.get_height() - ship.get_height()
ship_left = screen.get_width()/2 - ship.get_width()/2
screen.blit(ship, (ship_left, ship_top))

shot = pygame.image.load(os.path.join("images", "fish.png"))

pygame.display.set_caption('JetBear')

while True:
    clock.tick(60)
    screen.blit(bg, (0,0))
    x,y = pygame.mouse.get_pos()
    screen.blit(ship, (x-ship.get_width()/2, ship_top))

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            sys.exit()
        
        pygame.display.update()