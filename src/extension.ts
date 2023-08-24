// 模块 'vscode' 包含了 VS Code 的扩展性 API
// 导入该模块并在下面的代码中使用别名 vscode 引用它
import * as vscode from 'vscode';

// 您的扩展被激活时，将调用此方法
// 您的扩展在首次执行命令时被激活
export function activate(context: vscode.ExtensionContext) {

	// 使用控制台输出诊断信息（console.log）和错误信息（console.error）
	// 此行代码只会在您的扩展被激活时执行一次
	console.log('恭喜，您的扩展 "ths-code-jarvis" 现在已激活！');

	// 该命令已在 package.json 文件中定义
	// 现在使用 registerCommand 提供命令的实现
	// 命令ID参数必须与 package.json 中的命令字段匹配
	let disposable = vscode.commands.registerCommand('ths-code-jarvis.helloJaychou', () => {
		// 每次执行命令时，您放置在这里的代码都将被执行
		// 显示一个消息框给用户
		vscode.window.showInformationMessage('Hello，JayChou！');
	});
	let disposable1 = vscode.commands.registerCommand('ths-code-jarvis.helloJarvis', () => {
		vscode.window.showInformationMessage('Hello，JayChou！');
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(disposable1);
}

// 当您的扩展被停用时，将调用此方法
export function deactivate() {}
