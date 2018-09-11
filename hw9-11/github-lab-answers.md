# What command do you use to setup a git repository inside of your folder?
git init

# What command do you use to ask git to start tracking a file?
git add .

# What command do you use to ask git to move your file from the staging area to the repository?
git push origin master

--
# What command do you use to pull any changes from the master repository into your local repository?
git add .
git commit -m 'text'
git push origin master

# What command do you use to unstage a file?
git reset HEAD

# What command do you use to change your files back to how they were after a commit?
git checkout

# Why is it important to use -- when changing files back to a previous state?
For undoing things

# Why might you want to reset your files back to a previous commit?
git reset

--
# What command do you use to create a branch?
git checkout -b + name

# What command do you use to use a different branch?
git checkout branch + name

# Why would you want to use a branch other than the default master?
Because you don't want to work on the original one and once the changes are submitted you can upload it to the master branch

--
# Give an example for when you would use git merge and give an example for when it would be better to submit a pull request to have your branch merged
merge the branch using git merge newbranch. This will merge the newbranch branch into the currently active branch (usually master)

# What command do you use to send all of the work that you've done locally to your remote repository?
git push origin master
