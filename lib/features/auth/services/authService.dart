import 'package:amazon_clone_tutorial/models/user.dart';
import 'package:http/http.dart' as http;

class AuthService {
  // sign up user

  void signUpUser({
    required String email,
    required String password,
    required String name,
  }) async {
    try {
      User user = User(
          id: '',
          email: email,
          name: name,
          password: password,
          address: '',
          type: '',
          token: '');

          http.post()


    } catch (e) {}
  }
}
