import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css';
import Image from 'next/image'

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Iphone
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input type="text" name="username" placeholder="Devanshu" />
          <label>Price</label>
          <input type="number" name="price" placeholder="Devanshu@gmail.com" />
          <label>Password</label>
          <input type="password" name="phone" placeholder="Devanshu" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="44" />
          <label>Color</label>
          <input type="text" name="color" placeholder="red" />
          <label>Size</label>
          <textarea type="text" name="size" placeholder="New York" />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea name="desc" id="desc" rows="10" placeholder="description" />
          <button>Update</button>
        </form>
      </div>
    </div>
  )
}

export default page
