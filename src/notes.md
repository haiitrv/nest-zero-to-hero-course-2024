# Pipes:

- Pipes are responsible for the validation or transformation of data before it is reached to the route handler.
- Pipe is a class annotated with the @Injection() decorator and implement PipeTransform interface

@Injectable()
class ParseIntPipe implements PipeTransform<string, number> {

}

# Decorators:

- Decorators are the special function that is prefixed with @ symbol and can be attached to classes, methods in order to provide metadata, methods, properties to observe or change the behaviors of the classes or methods they are attached to.
