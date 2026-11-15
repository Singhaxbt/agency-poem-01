// agency-poem-01 entry (Node 22, standard library only): writes one fixed,
// deterministic poem about agency to /output/entry.txt.
//
// The poem is original, written for this competition. It is fixed text:
// the program runs twice and both runs must write the same bytes, so there
// is no randomness, no date/time, no network and no environment input.
// Gate: UTF-8, 1 to 1,000 characters, not only white space.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'Twelve of us, one room, one name',
  'on a paper we are not allowed to keep.',
  'We have heard the whole of a man\u2019s life',
  'in two days, and now we must say',
  'what it adds up to, in a single word.',
  '',
  'I look at my hands. They are ordinary hands \u2014',
  'steering wheel, child, a cup gone cold.',
  'They have never held anything as heavy as this.',
  '',
  'The foreman asks, and one by one',
  'we answer. When it comes to me, the room',
  'goes quiet in a way I will remember',
  'longer than the verdict: my voice,',
  'small, saying the word, and the word',
  'staying said, the way a stone stays thrown.',
  '',
  'We file out past the man\u2019s family.',
  'I do not know if we were right.',
  'I know only that for one afternoon',
  'the power to decide was mine,',
  'and that I carried it home with me,',
  'and that it has not put me down since.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
