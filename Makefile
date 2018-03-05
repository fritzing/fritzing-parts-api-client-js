BIN = ./node_modules/.bin

all: lint test build

lint:
	@$(BIN)/eslint .
lint-fix:
	@$(BIN)/eslint . --fix
.PHONY: lint lint-fix

test:
	@$(BIN)/jest
open-coverage: test
	@open coverage/lcov-report/index.html
.PHONY: test open-coverage

build:
	@$(BIN)/babel -o lib/index.js src/index.js
build-commit: build
	git add lib
	git commit -m "Updated lib artifact"
.PHONY: build build-commit


docs:
	@$(BIN)/esdoc
docs-open: docs
	@open docs/index.html
.PHONY: docs docs-open

clean:
	@rm -rf coverage
.PHONY: clean
