(function(crc32, crc16) {
  describe('crc32', function() {
    describe('ascii', function() {
      it('should be successful', function() {
        expect(crc32('The quick brown fox jumps over the lazy dog')).to.be('414fa339');
        expect(crc32('The quick brown fox jumps over the lazy dog.')).to.be('519025e9');
      });
    });

    describe('UTF8', function() {
      it('should be successful', function() {
        expect(crc32('中文')).to.be('5a09ed37');
        expect(crc32('aécio')).to.be('cf1f6086');
        expect(crc32('𠜎')).to.be('a9aeffea');
      });
    });

    describe('Array', function() {
      describe('Array', function() {
        it('should be successful', function() {
          expect(crc32([0])).to.be('d202ef8d');
          expect(crc32([84, 104, 101, 32, 113, 117, 105, 99, 107, 32, 98, 114, 111, 119, 110, 32, 102, 111, 120, 32, 106, 117, 109, 112, 115, 32, 111, 118, 101, 114, 32, 116, 104, 101, 32, 108, 97, 122, 121, 32, 100, 111, 103])).to.be('414fa339');
        });
      });

      describe('Uint8Array', function() {
        it('should be successful', function() {
          expect(crc32(new Uint8Array([0]))).to.be('d202ef8d');
        });
      });

      describe('ArrayBuffer', function() {
        it('should be successful', function() {
          expect(crc32(new ArrayBuffer(1))).to.be('d202ef8d');
        });
      });
    });
  });

  describe('crc16', function() {
    describe('ascii', function() {
      it('should be successful', function() {
        expect(crc16('The quick brown fox jumps over the lazy dog')).to.be('fcdf');
        expect(crc16('The quick brown fox jumps over the lazy dog.')).to.be('843d');
      });
    });

    describe('UTF8', function() {
      it('should be successful', function() {
        expect(crc16('中文')).to.be('6659');
        expect(crc16('aécio')).to.be('9ef3');
        expect(crc16('𠜎')).to.be('46da');
      });
    });

    describe('Array', function() {
      describe('Array', function() {
        it('should be successful', function() {
          expect(crc16([0])).to.be('0000');
          expect(crc16([84, 104, 101, 32, 113, 117, 105, 99, 107, 32, 98, 114, 111, 119, 110, 32, 102, 111, 120, 32, 106, 117, 109, 112, 115, 32, 111, 118, 101, 114, 32, 116, 104, 101, 32, 108, 97, 122, 121, 32, 100, 111, 103])).to.be('fcdf');
        });
      });

      describe('Uint8Array', function() {
        it('should be successful', function() {
          expect(crc16(new Uint8Array([0]))).to.be('0000');
        });
      });

      describe('ArrayBuffer', function() {
        it('should be successful', function() {
          expect(crc16(new ArrayBuffer(1))).to.be('0000');
        });
      });
    });
  });
})(crc32, crc16);
