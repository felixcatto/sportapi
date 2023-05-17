install:
	npm i

start:
	npx graphql-codegen
	npx vite

start-production:
	npx vite preview

build:
	npx vite build

lint:
	npx eslint .
	npx tsc
