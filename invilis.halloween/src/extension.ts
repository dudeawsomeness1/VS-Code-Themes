import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  // Switch bracket palette function
  context.subscriptions.push(vscode.commands.registerCommand('halloween.switchBracketPalette', async () => {
    // Define palette options
    const options: vscode.QuickPickItem[] = [
      { label: 'VS Code', description: 'Default VS Code colors' },
      { label: 'M&Ms', description: 'M&M color palette' },
      { label: 'M&Ms (bright)', description: 'M&M color palette with brighter colors' },
      { label: 'Candy Corn', description: 'Candy Corn color palette' }
    ];

    // Show list of options to the user
    const selection = await vscode.window.showQuickPick(options, {
      placeHolder: 'Select a color palette'
    });

    if (selection) {
      let palette = selection.label; // as 'VS Code' | 'M&Ms' | 'Candy Corn'

      console.log(`Hallow's Eve theme: switched bracket palette to ${palette}.`);
      // Get the current color customizations
      let colorCustomizations = vscode.workspace.getConfiguration().get('workbench.colorCustomizations') as { [key: string]: string };

      switch (palette) {
        case 'VS Code':
        colorCustomizations['editorBracketHighlight.foreground1'] = '#f8de70';
        colorCustomizations['editorBracketHighlight.foreground2'] = '#da70d6';
        colorCustomizations['editorBracketHighlight.foreground3'] = '#179fff';
        colorCustomizations['editorBracketHighlight.foreground4'] = '#00000000';
        colorCustomizations['editorBracketHighlight.foreground5'] = '#00000000';
        colorCustomizations['editorBracketHighlight.foreground6'] = '#00000000';
        break;
        case 'M&Ms':
        colorCustomizations['editorBracketHighlight.foreground1'] = '#fff200';
        colorCustomizations['editorBracketHighlight.foreground2'] = '#b11224';
        colorCustomizations['editorBracketHighlight.foreground3'] = '#2f9fd7';
        colorCustomizations['editorBracketHighlight.foreground4'] = '#31ac55';
        colorCustomizations['editorBracketHighlight.foreground5'] = '#f26f22';
        colorCustomizations['editorBracketHighlight.foreground6'] = '#603a34';
        break;
        case 'M&Ms (bright)':
        colorCustomizations['editorBracketHighlight.foreground1'] = '#fff200';
        colorCustomizations['editorBracketHighlight.foreground2'] = '#bf0016';
        colorCustomizations['editorBracketHighlight.foreground3'] = '#008fd6';
        colorCustomizations['editorBracketHighlight.foreground4'] = '#00ab33';
        colorCustomizations['editorBracketHighlight.foreground5'] = '#f25900';
        colorCustomizations['editorBracketHighlight.foreground6'] = '#661f14';
        break;
        case 'Candy Corn':
        colorCustomizations['editorBracketHighlight.foreground1'] = '#FFF4EB';
        colorCustomizations['editorBracketHighlight.foreground2'] = '#FD5B22';
        colorCustomizations['editorBracketHighlight.foreground3'] = '#F4C418';
        colorCustomizations['editorBracketHighlight.foreground4'] = '#00000000';
        colorCustomizations['editorBracketHighlight.foreground5'] = '#00000000';
        colorCustomizations['editorBracketHighlight.foreground6'] = '#00000000';
        break;
      }
      vscode.workspace.getConfiguration().update('workbench.colorCustomizations', colorCustomizations, true);
    }
  }));
}