import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      'height': '100px',
      'margin-top': '8px',
      'margin-bottom': '8px',
    },
    label: {
      'padding-top': '30px',
    },
  })
);
