# myFrontendCRM

1. Get the yarn package manager.

   npm install --global yarn

2. Once you git clone to the repo, change directory into frontend
   
   cd frontend

3. Use yarn to download everything that is used in the project.

   yarn

4. Once all of it has been downloaded, run the website

   yarn dev

5. Go to localhost:3000 and enjoy

Instructions on usage

1. Press the Add click + button to add clients
2. Fill in the form.
3. Add as many as possible.
4. Press the top right corner hamburger to open up and Save the data so 
    that the next it runs, the data will be saved.
5. Click on view details to go for each client's detail page.
6. The top hambuger has also a sorter for the clients.
7. There is also a data.json file that places clients in immediately,
      it will populate the whole client array if it is empty and uncommented out in CRMMain.tsx
8. The Creation sort is sorted by earliest to latest date of creation,
     populated client array doesn't work as the creation comes out as undefined.
9. Dynamic routes in NextJs was used, the View Client page changes the page to its own unique page.

Things that should be handled
1. Beautifying the whole look
2. The error checking for empty characters for the clients.
3. Probably mobile compatibility

Stacks used:
NextJs
Mui
