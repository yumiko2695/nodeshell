process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  let cmd = data.toString().trim();

  if (cmd === 'pwd') {
    cmd = `${process.cwd()}`;
  }

  process.stdout.write(cmd);
  process.stdout.write('\nprompt > ');

})

// process.stdin.on('data', (data) => {
//   let cmd = data.toString().trim();

//   if (data === 'pwd') {
//     process.stdout.write(`${process.cwd()}`);
//     process.stdout.write('\nprompt > ');
//   }

// })
