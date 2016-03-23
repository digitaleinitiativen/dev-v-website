rm -Rf public
hugo
rsync -rv public/* $1@devv.digitaleinitiativen.at:/home/joemoe/webapps/devv