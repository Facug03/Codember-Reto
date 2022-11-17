function message() {
  const code =
    '11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101'
  let initial = 97
  const letters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]
  let codAscii = {}
  let message = ''

  for (let algo of letters) {
    codAscii[initial] = algo
    initial++
  }

  for (let i = 0; i < code.length; i++) {
    if (code[i] === ' ') {
      message = message + ' '
      continue
    }
    if (codAscii[code.slice(i, i + 1)]) {
      message = message + codAscii[code.slice(i, i + 1)]
    } else if (codAscii[code.slice(i, i + 2)]) {
      message = message + codAscii[code.slice(i, i + 2)]
      i = i + 1
    } else if (codAscii[code.slice(i, i + 3)]) {
      message = message + codAscii[code.slice(i, i + 3)]
      i = i + 2
    }
  }

  return message
}

message()
