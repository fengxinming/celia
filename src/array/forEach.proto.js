import defineArrayProto from '../_internal/_defineArrayProto';
import forEach from '../_internal/_array/_forEach';

function fn(iterator, context) {
  forEach(this, iterator, context);
}

defineArrayProto('forEach', fn);
defineArrayProto('each', fn);
