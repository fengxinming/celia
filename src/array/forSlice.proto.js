import defineArrayProto from '../_internal/_defineArrayProto';
import forSlice from '../_internal/_array/_forStart';

defineArrayProto('forSlice', function (start, end, iterator, context) {
  forSlice(this, start, end, iterator, context);
});
