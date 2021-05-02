// May 2, 2021
// Source control and How to use GitHub

pwd //print working directory
cd .. //go up one folder
cd ~/Desktop/Code/reactNative/react-native-notes/ //changes directory

//git clone
git clone https://github.com/verbiski/react-native-notes.git //copies respository to directory

//git status
git status //shows any differences between us and github up in the sky!

//git add
git add //Add new changes or files.
git add index.html //Add new changes or files by name.
git add -A //add all
git add . //adds everything in directory

//git commit
git commit //Lock in changes or additions into repository
git commit -m "added index.html" //be sure to add in a message
//Note: if you don't add a single line message, you'll be forced to 
//      enter a multi-line message. To get out of the multi-line message
//      you must hit ESQ, then type :wq in terminal

//git push
git push //takes anything locked/commited on local machine and pushes to github.com

//git pull
git pull //pulls down from github.com.
//Note: make sure you're in the right directory
//      you must be in the directory of the github repository

//If two people are working on the same line of code of the same version of code,
//then they can get a merge conflict. To resolve merge conflicts, fix the error manually, 
//then save, git add -A, git commit, git push.
