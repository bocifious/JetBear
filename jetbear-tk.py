# Working on an implementation of JetBear using Tkinter

from tkinter import *
import os

# Create window object
app = Tk()

app.title('JetBear')
app.geometry('930x360')

background_image = tk.PhotoImage(os.path.join("images", "background.png"))
background_label = tk.Label(parent, image=background_image)
background_label.place(x=0, y=0, relwidth=1, relheight=1)

# Start program
app.mainloop()