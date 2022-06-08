import { ContainerModule } from '@theia/core/shared/inversify';
import { /* @echo extensionPrefix*/Widget } from './/* @echo extensionPath */-widget';
import { /* @echo extensionPrefix*/Contribution } from './/* @echo extensionPath */-contribution';
import { bindViewContribution, FrontendApplicationContribution, WidgetFactory } from '@theia/core/lib/browser';

import '../../src/browser/style/index.css';

export default new ContainerModule(bind => {
    bindViewContribution(bind, /* @echo extensionPrefix*/Contribution);
    bind(FrontendApplicationContribution).toService(/* @echo extensionPrefix*/Contribution);
    bind(/* @echo extensionPrefix*/Widget).toSelf();
    bind(WidgetFactory).toDynamicValue(ctx => ({
        id: /* @echo extensionPrefix*/Widget.ID,
        createWidget: () => ctx.container.get</* @echo extensionPrefix*/Widget>(/* @echo extensionPrefix*/Widget)
    })).inSingletonScope();
});
