import defineArrayProto from '../_internal/_defineArrayProto';

defineArrayProto('toArray', function () {
  return [...this];
});
