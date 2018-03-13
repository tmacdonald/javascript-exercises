import { intercept } from './exercise-3'

function functionToWrap(input) {
    return new Promise(resolve => resolve(input + 'd'))
}

function interceptor1(input, next) {
    return next(input + 'b').then(result => result + 'f')
}

function interceptor2(input, next) {
    return next(input + 'c').then(result => result + 'e')
}

xit("should intercept a single parameter function and modify the result", done => {
    const intercepted = intercept(functionToWrap, [interceptor1, interceptor2])

    intercepted('a').then(result => {
        expect(result).toEqual('abcdef')
        done()
    })
})

xit("should take in account order", done => {
    const intercepted = intercept(functionToWrap, [interceptor2, interceptor1])

    intercepted('a').then(result => {
        // Note that subtle order difference here
        // Also note that the first interceptor will run their input modification first
        // but their return modification last
        // input: a -> ac (interceptor2) -> acb (interceptor1)
        // output: acbd (interceptee) -> acbdf (interceptor1) -> acbdfe (interceptor2)
        expect(result).toEqual('acbdfe') 
        done()
    })
})