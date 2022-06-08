import 'reflect-metadata';
import { MessageService } from '@theia/core';
import { ContainerModule, Container } from '@theia/core/shared/inversify';
import { /* @echo extensionPrefix*/Widget } from './/* @echo extensionPath */-widget';
import { render } from '@testing-library/react'

describe('/* @echo extensionPrefix*/Widget', () => {

    let widget: /* @echo extensionPrefix*/Widget;

    beforeEach(async () => {
        const module = new ContainerModule( bind => {
            bind(MessageService).toConstantValue({
                info(message: string): void {
                    console.log(message);
                }
            } as MessageService);
            bind(/* @echo extensionPrefix*/Widget).toSelf();
        });
        const container = new Container();
        container.load(module);
        widget = container.resolve</* @echo extensionPrefix*/Widget>(/* @echo extensionPrefix*/Widget);
    });

    it('should render react node correctly', async () => {
        const element = render(widget.render());
        expect(element.queryByText('Display Message')).toBeTruthy();
    });

    it('should inject \'MessageService\'', () => {
        const spy = jest.spyOn(widget as any, 'displayMessage')
        widget['displayMessage']();
        expect(spy).toBeCalled();
    });

});
