// Bad Example: A class with multiple responsibilities
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  saveToDatabase() {
    // Code to save user data to a database
  }

  sendWelcomeEmail() {
    // Code to send a welcome email to the user
  }
}

// Good Example: Separate classes with single responsibilities
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class UserRepository {
  save(user) {
    // Code to save user data to a database
  }
}

class EmailService {
  sendWelcomeEmail(user) {
    // Code to send a welcome email to the user
  }
}

// Usage
const newUser = new User("John Doe", "john@example.com");

const userRepository = new UserRepository();
userRepository.save(newUser);

const emailService = new EmailService();
emailService.sendWelcomeEmail(newUser);
