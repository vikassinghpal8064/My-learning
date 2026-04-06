# GIT commands

* Git commit
1. what is do , is that when we do 'git commit -m "msg"' we are making a node and the head move to the that node itself

2. git branch name

when we do ' git branch vikas ' it will create a pointer of vikas in the graph

3. git checkout master/vikas

when we hit that command head move to that node in graph 

4. git checkout -b branch name

this cmd is nothing but combination of git branch + git checkout

5. git reset --hard HEAD^

it will delete the node/ last commit and move head to the previous node . HEAD^^ delete the two nodes . Node there are 3 flags like --soft, --mixed, --hard

6. git merge branchname

what it do when there are branches and your head is on the master branch , when you run that command it will create a new node and connect to both node master as well as vikas branch.

7. git rebase branchName

git rebase will take the commits on this branch and "move" them so that their new "base" is at the point you specify.

You should pay close attention to the commit IDs of the circles as they move when you do this exercise.

8. git fetch

it will fetch all the commits in the local from origin

9. git pull 

It will do two cmd simultaneously git fetch + git merge

10. git log and git log --stat


