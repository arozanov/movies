import {debounce} from "../debouncer";

jest.useFakeTimers();
test('calls the callback after 1 second', () => {
    const callback = jest.fn();
    const debouncer = debounce(callback, 1000);
    debouncer();
    expect(callback).not.toBeCalled();
    jest.runAllTimers();
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
});