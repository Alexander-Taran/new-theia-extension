/**
 * Generated using theia-extension-generator
 */
import { ContainerModule } from '@theia/core/shared/inversify';
import { /* @echo extensionPrefix */Contribution } from './/* @echo extensionPath */-contribution';


export default new ContainerModule(bind => {

    // Replace this line with the desired binding, e.g. "bind(CommandContribution).to(/* @echo extensionPrefix */Contribution)
    bind(/* @echo extensionPrefix */Contribution).toSelf();
});
