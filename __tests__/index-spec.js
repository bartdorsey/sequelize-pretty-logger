const mockLogger = jest.fn(() => {
});
const log = require('../index')({
  logger: mockLogger
});

describe('sequelize-pretty-logger', () => {
  it('should format the SQL', () => {
    log('Executing (default):SELECT *');
    expect(mockLogger).toHaveBeenCalledWith("[38;2;0;119;170mSELECT[38;2;211;211;211m [38;2;154;110;58m*[0m");
  });
});