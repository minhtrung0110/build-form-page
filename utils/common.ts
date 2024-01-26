// Check if `child` is a descendant of `parent`
export const isDescendant = (parent: any, child: any): boolean => {
  let node = child.parentNode;
  while (node) {
    if (node === parent) {
      return true;
    }

    // Traverse up to the parent
    node = node.parentNode;
  }

  // Go up until the root but couldn't find the `parent`
  return false;
};

/**
 * Function to generate random string
 * @param number - length to render random
 * @returns {string}
 */
export const random = (number: number): string => {
  try {
    let text = '';
    let possible = 'abcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < number; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  } catch (error) {
    // handleError(error, {
    //   path: PATH,
    //   name: 'random',
    //   args: {
    //     number,
    //   },
    // });

    return '';
  }
};

