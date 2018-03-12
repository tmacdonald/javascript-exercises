import { intercept } from './intercept-1'

// interceptee is the function that will be wrapped
function interceptee() {
    return new Promise(resolve => resolve('e'))
}

// interceptor1 is the function that will modify the response
// of interceptee
function interceptor1(next) {
    return next().then(x => 'r' + x + 'd')
}

function interceptor2(next) {
    return next().then(x => 'f' + x + 'd')
}

it("should return a function", () => {
    const intercepted = intercept(interceptee, interceptor1)

    expect(typeof intercepted == "function").toBe(true)
})

it("should intercept a parameterless function and modify the result", done => {
    const intercepted = intercept(interceptee, interceptor1)

    intercepted().then(result => {
        expect(result).toEqual('red')
        done()
    })
})

it("should work with a different interceptor", done => {
    const intercepted = intercept(interceptee, interceptor2)

    intercepted().then(result => {
        expect(result).toEqual('fed')
        done()
    })
})