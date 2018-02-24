BIN = ./node_modules/.bin

all: lint test
lint:
	@$(BIN)/eslint .
lint-fix:
	@$(BIN)/eslint . --fix
test:
	@$(BIN)/jest
.PHONY: all lint lint-fix test

build:
	@$(BIN)/babel -o lib/index.js src/index.js
.PHONY: build

docs:
	@$(BIN)/esdoc
docs-open: docs
	@open docs/index.html
.PHONY: docs docs-open

clean:
	@rm -rf coverage
.PHONY: clean
