import socket
import threading

class ChatClient:
    def __init__(self, host, port):
        self.host = host
        self.port = port
        self.client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    def start(self):
        try:
            self.client_socket.connect((self.host, self.port))
            print("Connected to the chatroom.")

            receive_thread = threading.Thread(target=self.receive_messages)
            receive_thread.start()

            while True:
                message = input()
                if message == "/exit":
                    break
                self.send_message(message)

        except ConnectionRefusedError:
            print("Unable to connect to the chatroom.")

        finally:
            self.client_socket.close()
            print("Disconnected from the chatroom.")

    def receive_messages(self):
        while True:
            try:
                message = self.client_socket.recv(1024).decode('utf-8')
                if message:
                    print(message)
            except ConnectionResetError:
                break

    def send_message(self, message):
        try:
            self.client_socket.send(message.encode('utf-8'))
        except ConnectionResetError:
            print("Disconnected from the chatroom.")

if __name__ == '__main__':
    chat_client = ChatClient('localhost', 8000)
    chat_client.start()
