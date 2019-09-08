import pygame, sys, os
from pygame.locals import *

pygame.init()
clock = pygame.time.Clock()
screen = pygame.display.set_mode((600, 500))

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