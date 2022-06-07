/**
 * Generated using theia-extension-generator
 */
import { /* @echo extensionPrefix*/CommandContribution, /* @echo extensionPrefix*/MenuContribution } from './/* @echo extensionPath*/-contribution';
import { CommandContribution, MenuContribution } from '@theia/core/lib/common';
import { ContainerModule } from '@theia/core/shared/inversify';

export default new ContainerModule(bind => {
    // add your contribution bindings here
    bind(CommandContribution).to(/* @echo extensionPrefix*/CommandContribution);
    bind(MenuContribution).to(/* @echo extensionPrefix*/MenuContribution);
});
