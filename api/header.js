import common from './common';

const Header = () => ({
    res : {},

    contentType(val) {
        this.res = { ...this.res, 'Content-Type': val || '' };
        return this;
    },
    filter(val) {
        this.res = { ...this.res, 'filter': val || '' };
        return this;
    },
    token(val) {
        this.res = { ...this.res, 'x-token': val || '' };
        return this;
    },
    build() {
      return this.res;
    },
  });
export default Header;
