/// <reference path="fourslash.ts" />

////export function f() {}
//////foo
/////**///moo

goTo.marker();
verify.quickInfoIs("");
verify.verifyDefinitionsName("", "");
verify.goToDefinitionIs([]);
verify.referencesAre([]);
