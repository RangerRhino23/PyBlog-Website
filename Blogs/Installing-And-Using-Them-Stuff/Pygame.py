import pygame
import random

# Initialize Pygame
pygame.init()

# Set screen size
screen = pygame.display.set_mode((800, 600))

# Set title
pygame.display.set_caption("Catch the falling objects")

# Set colors
white = (255, 255, 255)
black = (0, 0, 0)

# Set font
font = pygame.font.Font(None, 36)

# Set basket position
basket_x = 400
basket_y = 550

# Set basket size
basket_width = 100
basket_height = 50

# Set object position
object_x = random.randint(0, 800)
object_y = 0

# Set object size
object_width = 50
object_height = 50

# Set score
score = 0

# Set game over flag
game_over = False

# Game loop
while not game_over:
    # Handle events
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            game_over = True

    # Get pressed keys
    keys = pygame.key.get_pressed()

    # Move basket left
    if keys[pygame.K_LEFT]:
        basket_x -= 1.2

    # Move basket right
    if keys[pygame.K_RIGHT]:
        basket_x += 1.2

    # Move object down
    object_y += 0.6

    # Check if object hits bottom of screen
    if object_y > 600:
        # Reset object position
        object_x = random.randint(0, 800)
        object_y = 0

    # Check if object hits basket
    if (object_x > basket_x and object_x < basket_x + basket_width) and (object_y > basket_y and object_y < basket_y + basket_height):
        # Increase score
        score += 1

        # Reset object position
        object_x = random.randint(0, 800)
        object_y = 0

    # Clear screen
    screen.fill(white)

    # Draw basket
    pygame.draw.rect(screen, black, (basket_x, basket_y, basket_width, basket_height))

    # Draw object
    pygame.draw.rect(screen, black, (object_x, object_y, object_width, object_height))

    # Draw score
    text = font.render("Score: " + str(score), True, black)
    screen.blit(text, (650, 10))

    # Update screen
    pygame.display.flip()

# Quit Pygame
pygame.quit()