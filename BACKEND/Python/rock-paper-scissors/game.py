import random

while True:
    choices = ["rock", "paper", "scissors"]

    computer = random.choice(choices)
    player = None
    while player not in choices:
        player = input("rock, paper or scissors? ").lower()

    if player == computer:
        print("computer :", computer)
        print("player :", player)
        print("Tie!!")
    elif player == "rock":
        if computer == "paper":
            print("computer :", computer)
            print("player :", player)
            print("You Lose!!")
        if computer == "scissors":
            print("computer :", computer)
            print("player :", player)
            print("yaahoo... You Win ")
    elif player == "paper":
        if computer == "scissors":
            print("computer :", computer)
            print("player :", player)
            print("You Lose!!")
        if computer == "rock":
            print("computer :", computer)
            print("player :", player)
            print("yaahoo... You Win ")
    elif player == "scissors":
        if computer == "rock":
            print("computer :", computer)
            print("player :", player)
            print("You Lose!!")
        if computer == "paper":
            print("computer :", computer)
            print("player :", player)
            print("yaahoo... You Win ")
    play_again = input("do you want to play again? (yes or no)").lower()

    if play_again == "yes" :
        pass
    elif play_again == "y":
        pass
    else:
        break
print("Bye...")
