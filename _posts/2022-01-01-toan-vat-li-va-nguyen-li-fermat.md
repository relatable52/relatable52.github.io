---
layout: post
title: "Định luật phản xạ và khúc xạ qua một góc nhìn mới"
author: "Chính D. Trần"
categories: journal
tag: [math, physics]
image: 
---

Định luật phản xạ ánh sáng và định luật khúc xạ ánh sáng là hai định luật đã rất quen thuộc trong quang hình học. Thông thường, khi chứng minh hai đinh luật này ta sẽ sử dụng các kiến thức hình học. Tuy nhiên, có một phương pháp chứng minh khác khá là độc đáo, đó chính là sử dụng cơ học để chứng minh!!!

Trước hết, chúng ta cần biết về quang trình và nguyên lí Fermat.

> **Quang trình:** Trong một môi trường trong suốt và đồng tính có chiết suất $n$, quang trình giữa hai điểm $A$ và $B$ được định nghĩa là tích giữa chiết suất $n$ và khoảng cách giữa hai điểm $A$, $B$.

> **Nguyên lí Fermat:** Khi ánh sáng truyền từ điểm $A$ tới điểm $B$, quang trình của quãng đường mà ánh sáng đi qua sẽ đạt giá trị cực trị (cực tiểu, cực đại hoặc đạt giá trị dừng) so với những quãng đường xung quanh.

### Chứng minh định luật phản xạ ánh sáng

Định luật phản xạ ánh sáng được phát biểu như sau:

> Khi ánh sáng chiếu tới một bề mặt phản xạ, tia phản xạ sẽ nằm trong cùng mặt phẳng với tia tới và pháp tuyến tại điểm tới. Hơn nữa, góc phản xạ sẽ bằng góc tới, $i=r$.

Giả sử có một tia sáng xuất phát tại điểm $A$, chiếu tới một gương phẳng tại điểm $M$ và phản xạ trên gương rồi tới điểm $B$. Theo nguyên lí Fermat, quang trình của tia sáng phải cực tiểu, nghĩa là $MA+MB$ phải cực tiểu.

Bây giờ, chúng ta coi như là mặt phẳng gương trùng với mặt phẳng thẳng đứng, đường thẳng $AB$ song song với mặt đất, và tại điểm $A$, $B$ và $M$ có gắn những chiếc vòng nhỏ. Điểm $M$, bằng một cơ cấu nào đó, có thể tự do di chuyển trên mặt phẳng gương. Ta lấy một chiếc dây lần lượt luồn qua các vòng ở $A$, $M$ và $M$ rồi buộc vào hai đầu dây các vật nặn có khối lượng bằng nhau. Thả cho hệ chuyển động.

Sau khi thả cho hệ chuyển động, hệ sẽ dần tiến đến trạng thái cân bằng. Ở trạng thái này, thế năng của hệ đạt cực tiểu. Điều này có nghĩa là hai vật nặng sẽ xuống thấp nhất có thể, tương đương với việc chiều dài phần dây bên dưới $AB$ sẽ cực đại và chiều dài phần dây bên trên sẽ cực tiểu. Lúc này thì $MA+MB$ sẽ cực tiểu, đúng như ta mong muốn.

Xét sự cân bằng của điểm $M$. Ta dễ dàng thấy rằng điểm $M$ cân bằng khi nó nằm trong mặt phẳng chứa $AB$ và vuông góc với mặt phẳng gương. Lực 

> **Bài toán:** Cho một tam giác $ABC$. Tìm điểm $M$ sao cho tổng $MA+MB+MC$ là nhỏ nhất.  

Script goes here.

Tại đây, điểm $M$ chính là điểm Fermat, hay còn gọi là điểm Toricelli của tam giác. Sở dĩ người ta đặt tên như vậy bởi vì bài toán này được đặt ra lần đầu bởi nhà toán học Fermat trong một bức thư gửi đến Toricelli. Sau đó Toricelli đã đưa ra nhiều phương pháp giải khác nhau. Tuy nhiên, chúng ta sẽ không bàn đến những phương pháp đó ở đây, mà chúng ta sẽ sử dụng một phương pháp khác, đó chính là sử dụng **vật lí** để tìm ra điểm Fermat.

Giả sử ta nối các đỉnh của tam giác $ABC$ bằng các thanh cứng để tạo nên một chiếc khung hình tam giác. Tại ba đỉnh $A$, $B$, $C$ của chiếc khung có nhưng lỗ nhỏ đủ để có thể luồn dây qua, và dây có thể trượt qua các lỗ này không ma sát. Giữ cho chiếc khung nằm ngang song song với mặt đất. Ta lần lượt lấy ba sợi dây không khối lượng, không dãn, chiều dài bằng nhau và bằng $l$. Nối các đoạn dây lại tại chung một điểm $M$, các đầu còn lại luồn qua các lỗ tại ba đỉnh của tam giác và buộc vào mỗi đầu một vật nặng có khối lượng $m$. Khi ta thả cho hệ chuyển động, hệ sẽ dần tiến đến một trạng thái thế năng cực tiểu.

Ta chọn mặt phẳng của khung tam giác làm mốc tính thế năng. Thế năng của hệ sẽ là 

$$
\begin{align*}
E&=-mg(l-MA)-mg(l-MB)-mg(l-MC)\\
&=-3mgl+mg(MA+MB+MC).
\end{align*}
$$

Ta thấy là thế năng của hệ cực tiểu khi $MA+MB+MC$ cực tiểu, đây chính là điểm Fermat của chúng ta. Mặt khác, khi hệ cân bằng, hợp lực tác dụng lên điểm $M$ bằng không. Lực căng của mỗi dây bằng nhau và bằng $mg$, vậy nên khi cân bằng góc giữa lực phải là $120^\circ$. Điểm Fermat là điểm $M$ nằm trong tam giác $ABC$ sao cho $\widehat{AMB}=\widehat{BMC}=\widehat{AMC}=120^\circ$ trong trường hợp tam giác $ABC$ không có góc nào lớn hơn $120^\circ$.

Trong trường hợp tam giác $ABC$ có một góc lớn hơn $120^\circ$, giả sử $\widehat A>120^\circ$, ta thấy rằng vị trí cân bằng như ở phần trên là không thể nữa. Thay vào đó điểm $M$ sẽ luôn chịu một lực không cân bằng và luôn bị kéo về phía đỉnh $A$ và cứ như vậy cho đến khi $M$ trùng $A$. Trên thực tế thì lúc này thì hệ mất cân bằng và toàn bộ dây bị kéo qua lỗ $A$ xuống dưới, nhưng có lẽ trường hợp này không giúp ích cho lắm nên ta sẽ giới hạn chuyển động của điểm $M$ trên mặt phẳng của khung (i.e. Điểm M không thể rơi xuống). Lúc này thì điểm $M$ sẽ di chuyển tới khi trùng điểm $A$ rồi dừng lại. Đây cũng là điểm Fermat trong trường hợp này. Nếu tam giác $ABC$ có một góc lớn hơn $120^\circ$ thì điểm Fermat trùng với đỉnh tại góc đó.











 