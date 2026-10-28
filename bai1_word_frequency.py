"""Bài tập 1: Đếm tần suất xuất hiện của các từ
File: exercises/bai1_word_frequency.py

Hướng dẫn:
- Chạy file bằng Python 3: python exercises/bai1_word_frequency.py
- Nhập một câu khi được hỏi, chương trình sẽ in tần suất từ.
"""

def count_word_frequencies(text: str) -> dict[str, int]:
    """Trả về dict chứa tần suất xuất hiện của từng từ trong `text`.
    Xử lý:
    - chuyển về chữ thường
    - loại bỏ các dấu câu cơ bản
    - tách bằng khoảng trắng
    """
    text = text.lower()

    # Loại bỏ những dấu câu cơ bản
    punctuation = ".,?!;:\'\"()[]{}<>"
    for p in punctuation:
        text = text.replace(p, "")

    words = text.split()
    freq: dict[str, int] = {}

    for word in words:
        if word in freq:
            freq[word] += 1
        else:
            freq[word] = 1

    return freq


def main() -> None:
    text = input("Nhập một câu để đếm tần suất từ: ")
    if not text.strip():
        print("Không có nội dung. Thoát.")
        return

    freq = count_word_frequencies(text)

    print("\n--- Tần suất xuất hiện của các từ ---")
    for word, count in freq.items():
        print(f"Từ '{word}': {count} lần")


if __name__ == "__main__":
    main()
