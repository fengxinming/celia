import round from '../num/round';

const KB = 1024;
const MB = KB * 1024;
const GB = MB * 1024;
const TB = GB * 1024;

function defaultFormatter(num, unit) {
  return `${num} ${unit}`;
}

export default function byteSizeConvert(value, decimals, custom) {
  const bytes = +value;

  let val;
  let unit;
  if (bytes >= TB) {
    val = round(bytes / TB, decimals);
    unit = 'TB';
  }
  else if (bytes >= GB) {
    val = round(bytes / GB, decimals);
    unit = 'GB';
  }
  else if (bytes >= MB) {
    val = round(bytes / MB, decimals);
    unit = 'MB';
  }
  else if (bytes >= KB) {
    val = round(bytes / KB, decimals);
    unit = 'KB';
  }
  else if (bytes > 0) {
    val = bytes;
    unit = 'B';
  }
  else {
    val = 0;
    unit = 'B';
  }

  if (!custom) {
    custom = defaultFormatter;
  }

  return custom(val, unit, value);
}

byteSizeConvert.KB = KB;
byteSizeConvert.MB = MB;
byteSizeConvert.GB = GB;
byteSizeConvert.TB = TB;
