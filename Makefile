ifeq ($(OS),Windows_NT)
		BIN=node_modules\.bin
		PATHSEP2=\\
		RM=del -r
else
		BIN=./node_modules/.bin
		PATHSEP2=/
		RM=rm -rf
endif

# make <target> LOG=yes
ifeq "$(LOG)" ""
    LOG=no
endif

ifeq "$(LOG)" "no"
    L=@
endif

PATHSEP=$(strip $(PATHSEP2))

all: lint-fix test build docs

vars:
	@echo $(OS)
	@echo $(LOG)
	@echo $(BIN)
	@echo $(PATHSEP)
	@echo $(RM)

lint:
	$(L)$(BIN)$(PATHSEP)eslint .
lint-fix:
	$(L)$(BIN)$(PATHSEP)eslint . --fix
.PHONY: lint lint-fix

test:
	$(L)$(BIN)$(PATHSEP)jest
open-coverage: test
	$(L)open coverage$(PATHSEP)lcov-report$(PATHSEP)index.html
.PHONY: test open-coverage

build:
	$(L)$(BIN)$(PATHSEP)babel -o lib$(PATHSEP)index.js src$(PATHSEP)index.js
build-commit: build
	git add lib
	git commit -m "Updated lib artifact"
.PHONY: build build-commit

docs:
	$(L)$(BIN)$(PATHSEP)esdoc
docs-open: docs
	$(L)open docs$(PATHSEP)index.html
.PHONY: docs docs-open
docs-commit: docs
	git add docs
	git commit -m "Updated docs artifact"
.PHONY: docs docs-open docs-commit

clean:
	$(L)$(RM) coverage
.PHONY: clean
