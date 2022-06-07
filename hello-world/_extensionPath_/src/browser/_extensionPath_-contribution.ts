import { injectable, inject } from '@theia/core/shared/inversify';
import { Command, CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from '@theia/core/lib/common';
import { CommonMenus } from '@theia/core/lib/browser';

export const /* @echo extensionPrefix*/Command: Command = {
    id: '/* @echo extensionPrefix*/.command',
    label: 'Say Hello'
};

@injectable()
export class /* @echo extensionPrefix*/CommandContribution implements CommandContribution {

    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
    ) { }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(/* @echo extensionPrefix*/Command, {
            execute: () => this.messageService.info('Hello World!')
        });
    }
}

@injectable()
export class /* @echo extensionPrefix*/MenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: /* @echo extensionPrefix*/Command.id,
            label: /* @echo extensionPrefix*/Command.label
        });
    }
}