/* eslint import/prefer-default-export: off */
import { URL } from 'url';
import path from 'path';

import { PythonShell } from 'python-shell';

export function resolveHtmlPath(htmlFileName: string) {
  if (process.env.NODE_ENV === 'development') {
    const port = process.env.PORT || 1212;
    const url = new URL(`http://localhost:${port}`);
    url.pathname = htmlFileName;
    return url.href;
  }
  return `file://${path.resolve(__dirname, '../renderer/', htmlFileName)}`;
}

export function _closeMainWindow(window: any, event: any, arg: any) {
  window.close();
}

export function _setWindowSize(window: any, store:any) {
  const WINDOW_SIZE = window.getSize();
  store.set('win-size', WINDOW_SIZE)
}

export function _getAvailableDrives(event: any, args: any) {
  // run python script on app start
  let options = {
    // pythonPath: <python_path or __dirname>
    // scriptPath: <__dirname + scrip file>
    // args: ['arg1', 'arg2'] // args to pass to the py script
  };

  PythonShell.run(path.join(__dirname, 'scripts/my_scripts.py'), options)
    .then((data)=> {
      let error_message = 'no-drive-detected';
      
      if (data[0] === error_message) {
        event.reply('get-drives', error_message)
      } else {
        const available_array_of_drives = data[0];
        event.reply('get-drives', JSON.stringify(available_array_of_drives))
      }
    })
    .catch((err) => {
      console.log(err)
    })
}