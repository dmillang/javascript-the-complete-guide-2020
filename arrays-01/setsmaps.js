const ids = new Set(['Hi','from','set!']);

ids.delete('from');

for (const entry of ids.entries()) {
  console.log(entry[1]);
}