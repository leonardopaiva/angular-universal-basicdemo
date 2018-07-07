Now you need to deploy to a node server to see 

firebase deploying...
cp -a functions/dist/browser/. public/        - copia o dist/browser para o public
mv public/index.html public/index2.html       - renomeia o index para index2
firebase deploy                               - faz o deploy