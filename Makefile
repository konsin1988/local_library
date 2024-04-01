run:
	docker compose up -d && nodemon server.js

docker-ex:
	docker exec -it local_library bash

stop-container:
	docker compose down