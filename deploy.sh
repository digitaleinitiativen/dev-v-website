rm -Rf public
hugo
scp -r public/* $1@devv.digitaleinitiativen.at:/home/joemoe/webapps/devv